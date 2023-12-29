export default function Home() {
  return (
    <main className=''>
      <h1 className='text-primary-blue text-40 h1-sm '>hello</h1>
      <h2 className='text-primary-blue text-40 h2-lg '>hello</h2>
      <h3 className='text-primary-blue text-40 h3-lg '>hello</h3>
      <h4 className='text-primary-blue text-40 h4-sm '>hello</h4>
      <p className='paragraph-lg'>paragraph</p>
      <p className='paragraph-sm'>paragraph</p>
      <p className='paragraph-md'>paragraph</p>
      <button className='btn bg-btn-dark-blue '>button</button> <br />
      <button>button</button> <br />
      <br />
      <button className='btn bg-btn-light-blue hover:bg-btn-gray hover:text-default-black'>
        button
      </button>
      <br />
      <button className='btn-animate bg-btn-light-orange before:btn-before before:bg-btn-gray hover:before:btn-before-animate '>
        button
      </button>
      <br />
    </main>
  );
}
