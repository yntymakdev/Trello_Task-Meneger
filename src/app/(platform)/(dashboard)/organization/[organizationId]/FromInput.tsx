interface FormInput{
errors?:{
    title?:string[]
}

}
export default function FromInput ({errors}: FormInput)  {
  return (
    <div>
      <input
          id="title"
          name="title"
          required
          placeholder="Enter a board title"
          className="border-black border p-1"
      />
        {errors?.title && (
            <p className="text-rose-500">{errors.title}</p>
        )}
  
    </div>
  );
};


