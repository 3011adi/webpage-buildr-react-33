
'use client';
import { useRouter } from 'next/navigation';

export default function Page1() {
  const router = useRouter();
  
  return (
    <div className="flex flex-col  items-center min-h-screen p-3" style={{ backgroundColor: '#ffffff' }}>
     
        <div className="flex flex-col justify-start items-start w-full 
          p-2 rounded-none min-h-screen m-0   animate-none container-selectable bg-cover"style={{backgroundColor: 'rgb(255, 255, 255)', backgroundImage: 'url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80")', outline: 'currentcolor', outlineOffset: '2px'}}><div className="flex flex-row justify-center items-center w-full 
          p-2 rounded-lg h-auto m-2 bg-gradient-to-br from-white/60 to-white/40 animate-none container-selectable bg-cover"style={{backgroundColor: 'transparent', outline: 'currentcolor', outlineOffset: '2px'}}><nav className="flex flex-row justify-between items-center p-4   rounded-lg animate-none 
                font-semibold w-full p-0 m-0 text-none"style={{backgroundColor: 'transparent', color: 'rgb(0, 0, 0)', outline: 'currentcolor', outlineOffset: '2px'}}>
  <div className="text-3xl text-none text-start">autumn</div>

  
  
    <div className="lg:hidden">
      <button className="text-2xl text-none" onclick="this.nextElementSibling.classList.toggle('hidden')">
        ☰
      </button>

      <div className="hidden  absolute top-16 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-xl">
        
          <a href="/" className="block py-2 px-4 hover:scale-110 transition-transform text-none">
            Home
          </a>

        
          <a href="/page-2" className="block py-2 px-4 hover:scale-110 transition-transform text-none">
            About
          </a>

        
          <a href="/page-3" className="block py-2 px-4 hover:scale-110 transition-transform text-none">
            Services
          </a>

        
          <a href="/page-4" className="block py-2 px-4 hover:scale-110 transition-transform text-none">
            link
          </a>

        
      </div>

    </div>

  
  
  <div className="hidden  lg:flex space-x-4">
    
      <a href="/" className="hover:scale-110 transition-transform text-none">
        Home
      </a>

    
      <a href="/page-2" className="hover:scale-110 transition-transform text-none">
        About
      </a>

    
      <a href="/page-3" className="hover:scale-110 transition-transform text-none">services</a>

    
      <a href="/page-4" className="hover:scale-110 transition-transform text-none"><br/></a>

    
  </div>

</nav>
</div>
<div className="flex flex-col justify-center items-center w-full 
          p-0 rounded-lg min-h-[75vh] m-0   animate-none container-selectable bg-cover"style={{backgroundColor: 'transparent', outlineOffset: '2px'}}><p className="text-center lg:text-8xl text-6xl  
          font-medium w-full p-0 rounded-lg h-auto m-0 text-none     animate-none"style={{color: 'rgb(255, 255, 255)', backgroundColor: 'transparent', overflowWrap: 'break-word', wordBreak: 'break-word', maxWidth: '100%', hyphens: 'auto', outline: 'currentcolor', outlineOffset: '2px'}}>Craft your dream</p>
<p className="text-center text-2xl 
          font-medium w-[90%] p-0 rounded-lg h-auto m-0 text-none     animate-none"style={{color: 'rgb(255, 255, 255)', backgroundColor: 'transparent', overflowWrap: 'break-word', wordBreak: 'break-word', maxWidth: '100%', hyphens: 'auto', outline: 'currentcolor', outlineOffset: '2px'}}>Transforming interiors with bespoke designs, blending creativity, functionality, and elegance to craft spaces that inspire and reflect your unique style.<br/></p>
<br/><a href="/page-2" className="text-center text-xl font-medium w-auto mx-1 rounded-lg text-none"style={{color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(0, 0, 0)', outline: 'currentcolor', outlineOffset: '2px'}}>&nbsp; Know More.&nbsp;</a>
</div>
</div>
<br/><div className="grid lg:grid-cols-2 grid-cols-1 w-[90%] p-2 rounded h-auto 
         m-2   animate-none gap-4 place-items-center  container-selectable bg-cover"style={{backgroundColor: 'transparent', outline: 'currentcolor', outlineOffset: '2px'}}><p className="text-start text-4xl 
          font-semibold w-full p-2 rounded h-auto m-2 text-none     animate-none"style={{color: 'rgb(0, 0, 0)', backgroundColor: 'transparent', overflowWrap: 'break-word', wordBreak: 'break-word', maxWidth: '100%', hyphens: 'auto', outline: 'currentcolor', outlineOffset: '2px'}}>Bring Timeless Elegance And Natural Beauty To Your &nbsp;Space&nbsp;</p>
<div className="text-start text-xl 
          font-sans w-full p-2 rounded h-auto m-2   animate-none  container-selectable"style={{color: 'rgb(0, 0, 0)', backgroundColor: 'transparent', outlineOffset: '2px'}}>Designing spaces that inspire – your trusted interior solutions partner .Where creativity meets functionality in every space.&nbsp; &nbsp;<br/><br/><br/></div>
</div>
<div className="grid lg:grid-cols-2 grid-cols-1 w-[90%] p-2 rounded h-auto 
         m-2   animate-none gap-4 place-items-center  container-selectable bg-cover"style={{backgroundColor: 'transparent', outlineOffset: '2px'}}>
<img src="https://images.unsplash.com/photo-1583329550487-0fa300a4cd1a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2OTM4Mjd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvcnxlbnwwfHx8fDE3MzgyNDEyMTd8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080" alt="User provided image"style={{width: '400px', borderRadius: '0.5rem', cursor: 'move', outline: 'currentcolor', outlineOffset: '2px'}} /><div className="text-start text-2xl 
          font-sans w-[90%] p-2 rounded h-auto m-2   animate-none  container-selectable"style={{color: 'rgb(255, 255, 255)', backgroundColor: 'transparent', outline: 'currentcolor', outlineOffset: '2px'}}>
<img src="https://images.unsplash.com/photo-1586105251261-72a756497a11?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2OTM4Mjd8MHwxfHNlYXJjaHw2fHxpbnRlcmlvcnxlbnwwfHx8fDE3MzgyNDEyMTd8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080" alt="User provided image"style={{width: '300px', borderRadius: '0.5rem', cursor: 'move', outline: 'currentcolor', outlineOffset: '2px'}} /><br/>
<img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2OTM4Mjd8MHwxfHNlYXJjaHwxfHxyb29tfGVufDB8fHx8MTczODI0MTM4N3ww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080" alt="User provided image"style={{width: '340px', borderRadius: '0.5rem', cursor: 'move', outline: 'currentcolor', outlineOffset: '2px'}} /></div>
</div>
<br/><p className="text-start text-4xl 
          font-semibold w-[90%] p-0 rounded h-auto m-0 text-none     animate-none"style={{color: 'rgb(0, 0, 0)', backgroundColor: 'transparent', overflowWrap: 'break-word', wordBreak: 'break-word', maxWidth: '100%', hyphens: 'auto', outline: 'currentcolor', outlineOffset: '2px'}}>Transform Your Home&nbsp;</p>
<p className="text-start text-4xl 
          font-semibold w-[90%] p-0 rounded h-auto m-0 text-none     animate-none"style={{color: 'rgb(0, 0, 0)', backgroundColor: 'transparent', overflowWrap: 'break-word', wordBreak: 'break-word', maxWidth: '100%', hyphens: 'auto', outline: 'currentcolor', outlineOffset: '2px'}}>&nbsp;In Three Easy Ways</p>
<br/><div className="flex flex-col lg:flex-row justify-between items-center w-[90%] 
          p-2 rounded h-auto m-2   animate-none container-selectable bg-cover"style={{backgroundColor: 'transparent', outline: 'currentcolor', outlineOffset: '2px'}}><p className="text-start text-2xl 
          font-medium w-[90%] p-2 rounded h-auto m-2 text-none     animate-none"style={{color: 'rgb(0, 0, 0)', backgroundColor: 'transparent', overflowWrap: 'break-word', wordBreak: 'break-word', maxWidth: '100%', hyphens: 'auto', outline: 'currentcolor', outlineOffset: '2px'}}>1.consult</p>
<p className="text-start text-2xl 
          font-medium w-[90%] p-2 rounded h-auto m-2 text-none     animate-none"style={{color: 'rgb(0, 0, 0)', backgroundColor: 'transparent', overflowWrap: 'break-word', wordBreak: 'break-word', maxWidth: '100%', hyphens: 'auto', outline: 'currentcolor', outlineOffset: '2px'}}>2.design&nbsp;</p>
<p className="text-start text-2xl 
          font-medium w-[90%] p-2 rounded h-auto m-2 text-none     animate-none"style={{color: 'rgb(0, 0, 0)', backgroundColor: 'transparent', overflowWrap: 'break-word', wordBreak: 'break-word', maxWidth: '100%', hyphens: 'auto', outline: 'currentcolor', outlineOffset: '2px'}}>3.execute</p>
</div>
<div className="grid lg:grid-cols-3 grid-cols-1 w-[90%] p-2 rounded h-auto 
         m-2   animate-none gap-4 place-items-center  container-selectable bg-cover"style={{backgroundColor: 'transparent', outline: 'currentcolor', outlineOffset: '2px'}}><div className="
                              border max-w-[300px]  m-3 w-full p-2 m-1 rounded-lg shadow-md 
                              transition-transform duration-500 hover:scale-105 hover:shadow-3xl
                          "style={{backgroundColor: 'rgb(192, 192, 192)', color: 'rgb(0, 0, 0)', outline: 'currentcolor', outlineOffset: '2px'}}>
                              <h2 className="text-start text-3xl font-semibold text-none font-bold 
                                  transition duration-300 ease-in-out" style={{color: '#000000'}}>
                                  consult and concept
                              </h2>

                              <p className="text-start text-base font-semibold text-none mt-2
                                  transition duration-300 ease-in-out" style={{color: '#000000'}}>
                                  Offering expert consultation and innovative concepts to design interiors that seamlessly blend functionality, aesthetics, and your unique vision
                              </p>

                              
                                  <div className="overflow-hidden rounded-lg mt-4">
                                      
<img src="https://images.unsplash.com/photo-1467664631004-58beab1ece0d?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2OTM4Mjd8MHwxfHNlYXJjaHwxfHxjb25zdWx0fGVufDB8fHx8MTczODI0Mzk5NXww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080" alt="Card Image" className="w-full h-auto rounded-lg transform transition duration-500 hover:scale-110" onerror="this.src='https://via.placeholder.com/150'" />
                                  </div>

                              
                          </div>
<div className="
                              border max-w-[300px]  m-3 w-full p-2 m-1 rounded-lg shadow-md 
                              transition-transform duration-500 hover:scale-105 hover:shadow-3xl
                          "style={{backgroundColor: 'rgb(192, 192, 192)', color: 'rgb(0, 0, 0)', outline: 'currentcolor', outlineOffset: '2px'}}>
                              <h2 className="text-start text-3xl font-semibold text-none font-bold 
                                  transition duration-300 ease-in-out" style={{color: '#000000'}}>
                                  desing and visualize
                              </h2>

                              <p className="text-start text-base font-semibold text-none mt-2
                                  transition duration-300 ease-in-out" style={{color: '#000000'}}>
                                  Delivering exceptional interior designs that combine creativity, precision, and elegance to transform spaces into functional and inspiring environments
                              </p>

                              
                                  <div className="overflow-hidden rounded-lg mt-4">
                                      
<img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2OTM4Mjd8MHwxfHNlYXJjaHw1fHxkZXNpZ258ZW58MHx8fHwxNzM4MjQ0MTM5fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080" alt="Card Image" className="w-full h-auto rounded-lg transform transition duration-500 hover:scale-110" onerror="this.src='https://via.placeholder.com/150'" />
                                  </div>

                              
                          </div>
<div className="
                              border max-w-[300px]  m-3 w-full p-2 m-1 rounded-lg shadow-md 
                              transition-transform duration-500 hover:scale-105 hover:shadow-3xl
                          "style={{backgroundColor: 'rgb(192, 192, 192)', color: 'rgb(0, 0, 0)', outline: 'currentcolor', outlineOffset: '2px'}}>
                              <h2 className="text-start text-3xl font-semibold text-none font-bold 
                                  transition duration-300 ease-in-out" style={{color: '#000000'}}>
                                  execute and showcase
                              </h2>

                              <p className="text-start text-base font-semibold text-none mt-2
                                  transition duration-300 ease-in-out" style={{color: '#000000'}}>
                                  Executing interior projects with precision and excellence, turning innovative designs into stunning, functional realities tailored to your vision
                              </p>

                              
                                  <div className="overflow-hidden rounded-lg mt-4">
                                      
<img src="https://images.unsplash.com/photo-1574790398664-0cb03682ed1c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2OTM4Mjd8MHwxfHNlYXJjaHwzfHxleGVjdXRlfGVufDB8fHx8MTczODI0NDE5OXww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080" alt="Card Image" className="w-full h-auto rounded-lg transform transition duration-500 hover:scale-110" onerror="this.src='https://via.placeholder.com/150'" />
                                  </div>

                              
                          </div>
</div>
<br/><div className="flex flex-col justify-start items-center w-full 
          p-0 rounded-none min-h-screen m-0   animate-none container-selectable bg-cover"style={{backgroundColor: 'rgb(192, 192, 192)', outline: 'currentcolor', outlineOffset: '2px'}}><br/><p className="text-center text-5xl 
          font-serif w-3/4 p-2 rounded h-auto m-2 text-none     animate-none"style={{color: 'rgb(0, 0, 0)', backgroundColor: 'rgb(192, 192, 192)', overflowWrap: 'break-word', wordBreak: 'break-word', maxWidth: '100%', hyphens: 'auto', outline: 'currentcolor', outlineOffset: '2px'}}>Our Clients Love To Talk about Us</p>
<p className="text-center text-xl 
          font-serif w-3/4 p-2 rounded h-auto m-2 text-none     animate-none"style={{color: 'rgb(0, 0, 0)', backgroundColor: 'rgb(192, 192, 192)', overflowWrap: 'break-word', wordBreak: 'break-word', maxWidth: '100%', hyphens: 'auto', outline: 'currentcolor', outlineOffset: '2px'}}>Our clients are our inspiration, driving us to deliver tailored interior solutions that exceed expectations and bring their visions to life.</p>
<div className="flex flex-col lg:flex-row justify-between items-center w-[90%] 
          p-2 rounded-lg min-h-[75vh] m-2   animate-none container-selectable bg-cover"style={{backgroundColor: 'rgb(255, 255, 255)', outlineOffset: '2px'}}>
<img src="https://images.unsplash.com/photo-1514179974491-a7885781ed87?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2OTM4Mjd8MHwxfHNlYXJjaHwzfHxsdXh1cnl8ZW58MHx8fHwxNzM4MjQ4MjI0fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080" alt="User provided image"style={{width: '400px', borderRadius: '0.5rem', cursor: 'move', outline: 'currentcolor', outlineOffset: '2px'}} /><div className="text-center text-xl 
          font-serif w-[90%] p-2 rounded-lg min-h-[50vh] m-2   animate-none  container-selectable"style={{color: 'rgb(0, 0, 0)', backgroundColor: 'transparent', outlineOffset: '2px'}}><p className="text-end text-4xl 
          font-serif w-full p-2 rounded-lg h-auto m-2 text-none     animate-none"style={{color: 'rgb(0, 0, 0)', backgroundColor: 'transparent', overflowWrap: 'break-word', wordBreak: 'break-word', maxWidth: '100%', hyphens: 'auto', outline: 'currentcolor', outlineOffset: '2px'}}>Client Feedback&nbsp;</p>
<br/><p className="text-end text-xl 
          font-serif w-full p-2 rounded-lg h-auto m-2 text-none     animate-none"style={{color: 'rgb(0, 0, 0)', backgroundColor: 'transparent', overflowWrap: 'break-word', wordBreak: 'break-word', maxWidth: '100%', hyphens: 'auto', outline: 'currentcolor', outlineOffset: '2px'}}>Client feedback is the cornerstone of our growth and success. It provides invaluable insights that help us understand their unique needs, refine our processes, and elevate our designs. We view every piece of feedback as an opportunity to improve and innovate, ensuring that each project not only meets but exceeds expectations.&nbsp;<br/></p>
<br/><p className="text-start text-xl 
          font-bold w-auto p-2 rounded-lg h-auto m-2 text-none     animate-none"style={{color: 'rgb(0, 0, 0)', backgroundColor: 'transparent', overflowWrap: 'break-word', wordBreak: 'break-word', maxWidth: '100%', hyphens: 'auto', outline: 'currentcolor', outlineOffset: '2px'}}>John Doe -director</p>
</div>
</div>
</div>
<div className="grid lg:grid-cols-2 grid-cols-1 w-full p-0 rounded-none min-h-[25vh] 
         m-0   animate-none gap-4 place-items-center  container-selectable bg-cover"style={{backgroundColor: 'rgb(0, 0, 0)', outline: 'currentcolor', outlineOffset: '2px'}}><div className="text-start text-5xl 
          font-sans w-[90%] p-0 rounded-none h-auto m-0   animate-none  container-selectable"style={{color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(0, 0, 0)', outlineOffset: '2px'}}><p className="text-start text-5xl 
          font-sans w-[90%] p-0 rounded-none h-auto m-0 text-none     animate-none"style={{color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(0, 0, 0)', overflowWrap: 'break-word', wordBreak: 'break-word', maxWidth: '100%', hyphens: 'auto', outline: 'currentcolor', outlineOffset: '2px'}}>Do u have any questions ?</p>
<p className="text-start text-xl 
          font-sans w-[90%] p-0 rounded-none h-auto m-0 text-none     animate-none"style={{color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(0, 0, 0)', overflowWrap: 'break-word', wordBreak: 'break-word', maxWidth: '100%', hyphens: 'auto', outline: 'currentcolor', outlineOffset: '2px'}}>Are there specific areas where you often receive the most feedback (e.g., design concepts, execution, communication)?<br/></p>
</div>
<a href="https://wa.me/911234567890?text=Hello,%20I’m%20interested%20in%20your%20interior%20design%20services." className="text-center text-4xl font-sans w-[90%] mx-1 rounded-lg text-none" target="_blank" rel="noopener noreferrer"style={{color: 'rgb(0, 0, 0)', backgroundColor: 'rgb(255, 255, 255)', outline: 'currentcolor', outlineOffset: '2px'}}>contact us&nbsp;</a>
</div>

     
      
      <div className="fixed bottom-4 left-4 flex gap-2">
        
        
        <button
          onClick={() => router.push('/page-2')}
          className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
        >
          Next Page
        </button>
      </div>
    </div>
  );
}