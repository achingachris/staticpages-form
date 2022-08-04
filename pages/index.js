import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Static Forms</title>
        <meta name='description' content='Forms for Static Websites' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container'>
        <h1 className='fw-light text-center text-lg-start mt-4 mb-0'>
          Best Programming Tools
        </h1>
        <hr className='mt-2 mb-5' />

        {/* form */}
        <div className='container px-5 my-5'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='card border-0 rounded-3 shadow-lg'>
                <div className='card-body p-4'>
                  <div className='text-center'>
                    <div className='h1 fw-light'>Form</div>
                    <p className='mb-4 text-muted'>
                      This form is handled by{' '}
                      <a href='http://fabform.io'>FabForm</a>
                    </p>
                  </div>
                  <form
                    id='contactForm'
                    action='https://fabform.io/f/G1fiFX-'
                    method='post'
                  >
                    {/* Name Input */}
                    <div className='form-floating mb-3'>
                      <input
                        className='form-control'
                        id='name'
                        name='name'
                        type='text'
                        placeholder='Name'
                      />
                      <label htmlFor='name'>Name</label>
                    </div>
                    {/* best programming Language */}
                    <div className='form-floating mb-3'>
                      <input
                        className='form-control'
                        id='bestProgrammingLanguage'
                        name='bestProgrammingLanguage'
                        type='text'
                        placeholder='Best Programming Language'
                      />
                      <label htmlFor='bestProgrammingLanguage'>
                        Best Programming Language
                      </label>
                    </div>
                    {/* best Framework */}
                    <div className='form-floating mb-3'>
                      <input
                        className='form-control'
                        id='bestFramework'
                        name='bestFramework'
                        type='text'
                        placeholder='Best Framework'
                      />
                      <label htmlFor='bestFramework'>Best Framework</label>
                    </div>
                    {/* Submit button */}
                    <div className='d-grid'>
                      <button
                        className='btn btn-primary btn-lg'
                        id='submitButton'
                        type='submit'
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                  {/* End of contact form */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
