import './App.css';

//components
import ContactForm from './components/ContactForm'

//images
import githubLogo from './img/githublogo.png'
import linkedinLogo from './img/linkedinlogo.png'
import jcLogo from './img/jclogo.png'

//project images
import projectPlaceholder from './img/projectplaceholder.png'

function App() {
	return (
		<div className="font-roboto bg-gray-dark">
			{/*Side Menu*/}
			<div className="w-52 h-screen fixed bg-gray-darkest">

				{/*Logo*/}
				<div className="text-white h-52 bg-black flex flex-col items-center">
					<img className="mt-9 w-9/12 " alt="Joseph Carpenter Logo" src={jcLogo}/>
					<h1 className="mt-3 font-medium text-3xl">Joseph</h1>
					<h3 className="font-thin text-xl">Web Developer</h3>
				</div>

				{/*Menu*/}
				<div className="text-white pt-36 flex flex-col items-center text-xl">
					<button
						className="font-light h-10 w-9/12 border-b-2 pl-1 border-purple text-left transition duration-300 hover:bg-purple hover:text-black"
						href="#">About
					</button>
					<button
						className="font-light mt-5 h-10 w-9/12 border-b-2 pl-1 border-green text-left duration-300 hover:bg-green hover:text-black"
						href="#">Skills
					</button>
					<button
						className="font-light mt-5 h-10 w-9/12 border-b-2 pl-1 border-blue text-left duration-300 hover:bg-blue hover:text-black"
						href="#">Projects
					</button>
					<button
						className="font-light mt-5 h-10 w-9/12 border-b-2 pl-1 border-red text-left duration-300 hover:bg-red hover:text-black"
						href="#">Contact
					</button>
				</div>

				{/*External Link Logos*/}
				<div className="pt-24 flex flex-row justify-center space-x-4">
					<button className="w-6 duration-300 icon"><img alt="Github Link" src={githubLogo}/></button>
					<button className="w-6 duration-300 icon"><img alt="Linkedin Link" src={linkedinLogo}/></button>
				</div>
			</div>

			{/*Home*/}
			<div
				className="font-pressStart bg-gray-dark text-white pl-52 h-screen flex flex-col items-center justify-center">
				<h1 className="text-center text-6xl">Hi I'm Joe<span className="text-green">!</span></h1>
				<h2 className="text-center text-4xl mt-6">A <span className="text-purple">first class</span></h2>
				<h2 className="text-center text-4xl mt-6">Full Stack <span className="text-red">developer</span></h2>
				<button
					className="border-2 rounded border-blue text-blue p-2 mt-6 duration-300 hover:bg-blue hover:text-gray-dark">
					Contact
					Me
				</button>
			</div>

			{/*About*/}
			<div className="bg-black text-white pl-52 h-screen flex flex-col justify-center">
				<h2 className="text-center text-4xl font-pressStart">About</h2>
				<div className="flex flex-row justify-center pt-16 leading-8">
					<p className="w-5/12 mr-4 text-justify">
						I am a young American technologist who has had a life-long avid interest in programming.
						I acquired my first taste of programming when I was in middle school, where we made basic
						websites with HTML, CSS, and Javascript. In high school, I took every programming course
						available to me. In my spare time I’ve built computers, created websites, and made mods
						for video games.
					</p>
					<p className="w-5/12 ml-4 text-justify">
						Since high school, I’ve continued my education by studying computer science at North Hennepin
						Community College after which I moved to Denmark to study web development at Business Academy
						Aarhus. My passion and education make me a perfect candidate for an internship where I’ll be
						able to
						work on a team to leverage technology to solve real world business problems. After my
						internship, I
						hope to continue to work as a web developer in Denmark.
					</p>
				</div>

			</div>

			{/*Skills*/}
			<div className="bg-gray-dark text-white pl-52 h-screen">
				<h2 className="text-center text-4xl font-pressStart mt-12">Skills</h2>

			</div>

			{/*Projects*/}
			<div className="bg-black text-white pl-52 h-screen">
				<h2 className="text-center text-4xl font-pressStart mt-12">Projects</h2>
				<div className="flex flex-col w-11/12 mt-6">
					<ul className="">
						<li>
							<img className="w-4/12 float-left" src={projectPlaceholder}/>
							<div className="w-8/12 float-right pl-6 pr-6">
								<h3 className="font-pressStart text-xl pb-3">Testing Project</h3>
								<p className="text-sm">This project is a test project used to see how I will display my
									other projects. Test</p>
							</div>
						</li>
					</ul>
				</div>
			</div>

			{/*Contact*/}
			<div className="bg-black text-white pl-52 h-screen">
				<h2 className="text-center text-4xl font-pressStart mt-12">Contact</h2>
				<h3 className="text-center text-xl font-pressStart mt-12">I'll be happy to answer your questions!</h3>

				{/*Contact Form container*/}
				<div className={"w-8/12 m-auto"}>
					<ContactForm />
				</div>
			</div>
		</div>

	);
}

export default App;
