


const CoffePage = (props) => {
  console.log(props);


  return (
    <div className="min-h-screen font-['Roboto']">
      <header></header>
      <section className="container mx-auto">
        <section className=" p-32 min-h-screen flex-col flex">
          <div className="flex-1">
            <div className="py-10">
              <h1 className="project_title text-4xl font-bold leading-[52px]">Coffee By Benjamin</h1>
              <p className="quick_summary py-4 text-gray-400 w-1/2">
                A React app is just components within components within components. So developers don't build pages in React; they build components. Components let you split your UI into independent, reusable pieces. If you're used to designing pages, thinking in this modular way might seem like a big change.
              </p>
            </div>

            <div className="w-1/2 flex gap-10 justify-between pb-16">
              <div>
                <span className="type uppercase font-bold"> type </span>
                <p>internship</p>
              </div>
              <div>
                <span className="stack uppercase font-bold"> stack </span>
                <ul>
                  <li>React</li>
                  <li>GraphQL</li>
                  <li>Styled-component</li>
                  <li>Shopify</li>
                  <li>Netlify</li>
                </ul>
              </div>
              <div className="text-right">
                <span className="live uppercase font-bold">live</span>
                <p className="text-rose-500 font-bold text-lg py-4">View Site</p>
              </div>
            </div>
          </div>

          <img src="https://placehold.co/600x400/png" alt="cover image" className="w-1/2 self-end relative bottom-40 left-10" />
        </section>

        <section className="min-h-screen flex-col flex gap-16 ps-32">
          <div>
            <h4 className="text-3xl font-bold leading-[52px]  ">Project Purpose and Goal</h4>
            <div className="flex-col gap-4 flex py-8 text-gray-400 text-lg w-4/6">
              <p>
                React basically allows developers to utilize individual parts of their application on both the client-side and the server-side, which ultimately boosts the speed of the development process. In simple terms, different developers can write individual parts and all changes made won't cause the logic of the application.
              </p>
              <p>
                Using React, you can build complex UI interactions that communicate with the server in record time with JavaScript-driven pages.
              </p>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="w-1/2 flex items-center justify-center">
              <img src="/images/stack-image.webp" alt="stack" className="w-1/2 h-1/2" />
            </div>
            <div className=" flex-col gap-4 flex py-8 text-gray-400 text-lg w-1/2">
              <h4 className="text-3xl font-bold leading-[52px] text-black ">Web Stack and Explanation</h4>
              <p className="">
                React basically allows developers to utilize individual parts of their application on both the client-side and the server-side, which ultimately boosts the speed of the development process. In simple terms, different developers can write individual parts and all changes made won't cause the logic of the application.
              </p>
              <p className="">
                Using React, you can build complex UI interactions that communicate with the server in record time with JavaScript-driven pages.
              </p>
            </div>
          </div>
        </section>

        <div className="project-screenshots"></div>

        <section className="containter mx-auto p-10 h-screen flex justify-center items-center">
          <div className="w-1/2 text-center flex-col flex gap-4">
            <h4 className="text-3xl font-bold leading-[52px] text-black ">Problems and thought Process</h4>
            <p className="">
              React basically allows developers to utilize individual parts of their application on both the client-side and the server-side, which ultimately boosts the speed of the development process. In simple terms, different developers can write individual parts and all changes made won't cause the logic of the application.
            </p>
            <p className="">
              Using React, you can build complex UI interactions that communicate with the server in record time with JavaScript-driven pages.
            </p>
          </div>
        </section>

        <div className="screenshot"></div>

        <section className="ps-32 h-screen">
        <div className="w-2/4  flex-col flex gap-8">
            <h4 className="text-3xl font-bold leading-[52px] text-black ">Lessons Learned</h4>
            <p className="">
              React basically allows developers to utilize individual parts of their application on both the client-side and the server-side, which ultimately boosts the speed of the development process. In simple terms, different developers can write individual parts and all changes made won't cause the logic of the application.
            </p>
            <p className="">
              Using React, you can build complex UI interactions that communicate with the server in record time with JavaScript-driven pages.
            </p>
          </div>
        </section>

      </section>

      <div className="other_project"></div>
      <footer></footer>
    </div>
  )
}

export default CoffePage