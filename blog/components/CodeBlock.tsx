const CodeBlock = ({data}: any) => {
  
  const code = data.code
  const filename = data.filename
  const language = data.language
  
  return (
    <div>
      <div className="flex justify-between ">
        <p className='opacity-70'>
          {filename}
        </p>
        <p>
          language: <span className="opacity-70">{language}</span>
        </p>
      </div>
      <pre className='p-2'> 
        <code>
        {/* this method has no syntax highlighting, 
        look below for that */}
          {code} 
        </code>
      </pre>
    </div>
  )
}