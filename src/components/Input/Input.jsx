export default function Input({richText, ...props}) {
  if(richText){
    return (
      <textarea {...props}></textarea>
    );
  }
  else{
    return(
      <input  {...props}/>
    );
  }
}