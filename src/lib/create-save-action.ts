import { z } from "zod";

export type FieldErrors<T> = {
  [K in keyof T]?: string[];
};

export type ActionState<TInput, TOutput> = {
  fieldErrors?: FieldErrors<TInput>;
  error?: string | null;
  data?: TOutput;
};

export const createAction = <TInput, TOutput>(params: {
  schema: z.Schema<TInput>;
  handler: (validatedData: TInput) => Promise<TOutput> | TOutput;
}) => {
  return async (input: unknown): Promise<ActionState<TInput, TOutput>> => {
    const validationResult = params.schema.safeParse(input);

    if (!validationResult.success) {
      return {
        fieldErrors: validationResult.error.flatten().fieldErrors as FieldErrors<TInput>,
        error: "Validation failed",
      };
    }

    try {
      const data = await params.handler(validationResult.data);
      return { data };
    } catch (err) {
      return {
        error: err instanceof Error ? err.message : "Unknown error",
      };
    }
  };
};
