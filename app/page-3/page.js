
'use client';
import { useRouter } from 'next/navigation';

export default function Page3() {
  const router = useRouter();
  
  return (
    <div className="flex flex-col  items-center min-h-screen " style={{ backgroundColor: '#ffffff' }}>
     
        <div className="flex flex-col justify-start items-center w-full 
          p-0 rounded-none min-h-screen m-0   animate-none container-selectable bg-cover"style={{backgroundColor: 'rgb(192, 192, 192)', outlineOffset: '2px'}}><br/><p className="text-center text-5xl 
          font-sans w-full p-2 rounded h-auto m-2 text-none     animate-none"style={{color: 'rgb(0, 0, 0)', backgroundColor: 'rgb(192, 192, 192)', overflowWrap: 'break-word', wordBreak: 'break-word', maxWidth: '100%', hyphens: 'auto', outline: 'currentcolor', outlineOffset: '2px'}}>See how We've Transformed</p>
<p className="text-center text-5xl 
          font-sans w-full p-2 rounded-full h-auto m-2 text-none     animate-none"style={{color: 'rgb(0, 0, 0)', backgroundColor: 'transparent', overflowWrap: 'break-word', wordBreak: 'break-word', maxWidth: '100%', hyphens: 'auto', outline: 'currentcolor', outlineOffset: '2px'}}>Spaces Into Beautiful Works Of Art</p>
<div className="grid lg:grid-cols-2 grid-cols-1 w-[90%] p-2 rounded-full h-auto 
         m-2   animate-none gap-4 place-items-center  container-selectable bg-cover"style={{backgroundColor: 'transparent', outlineOffset: '2px'}}><div className="flex flex-row justify-between items-center w-full 
          p-2 rounded-full h-auto m-0   animate-none container-selectable bg-cover"style={{backgroundColor: 'transparent', outlineOffset: '2px'}}><p className="text-center text-xl 
          font-sans w-auto p-2 rounded-full h-auto m-0 text-none     animate-none"style={{color: 'rgb(68, 68, 68)', backgroundColor: 'rgb(255, 255, 255)', overflowWrap: 'break-word', wordBreak: 'break-word', maxWidth: '100%', hyphens: 'auto', outline: 'currentcolor', outlineOffset: '2px'}}>  Bedroom </p>
<p className="text-center text-xl 
          font-sans w-auto p-2 rounded-full h-auto m-0 text-none     animate-none"style={{color: 'rgb(68, 68, 68)', backgroundColor: 'rgb(255, 255, 255)', overflowWrap: 'break-word', wordBreak: 'break-word', maxWidth: '100%', hyphens: 'auto', outline: 'currentcolor', outlineOffset: '2px'}}>Living Room</p>
<p className="text-center text-xl 
          font-sans w-auto p-2 rounded-full h-auto m-0 text-none     animate-none"style={{color: 'rgb(68, 68, 68)', backgroundColor: 'rgb(255, 255, 255)', overflowWrap: 'break-word', wordBreak: 'break-word', maxWidth: '100%', hyphens: 'auto', outline: 'currentcolor', outlineOffset: '2px'}}>Explore Now</p>
</div>
<p className="text-center text-3xl 
          font-sans w-auto p-2 rounded-full h-auto m-0 text-none     animate-none"style={{color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(68, 68, 68)', overflowWrap: 'break-word', wordBreak: 'break-word', maxWidth: '100%', hyphens: 'auto', outline: 'currentcolor', outlineOffset: '2px'}}>&nbsp; Contact &nbsp;us. &nbsp;&nbsp;</p>
</div>
<br/>
<img src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2OTM4Mjd8MHwxfHNlYXJjaHwxfHxob21lc3xlbnwwfHx8fDE3MzgyNTczMTJ8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080" alt="User provided image"style={{width: '800px', borderRadius: '0.5rem', cursor: 'move', outline: 'currentcolor', outlineOffset: '2px'}} /></div>
<div className="flex flex-row justify-between items-center w-full 
          p-2 rounded-full h-auto m-0   animate-none container-selectable bg-cover"style={{backgroundColor: 'transparent', outline: 'currentcolor', outlineOffset: '2px'}}></div>
<p className="text-center text-5xl 
          font-sans w-auto p-2 rounded-full h-auto m-0 text-none     animate-none"style={{color: 'rgb(0, 0, 0)', backgroundColor: 'transparent', overflowWrap: 'break-word', wordBreak: 'break-word', maxWidth: '100%', hyphens: 'auto', outline: 'currentcolor', outlineOffset: '2px'}}>Visit us now&nbsp;</p>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509337!2d-122.41941568468192!3d37.77492977975966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064bf1db1c7%3A0x47e30ca6c2fd9b9!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1695926945557!5m2!1sen!2sin" className="p-2 m-1 w-full"style={{height: '500px', border: 'medium', borderRadius: '1.5rem', outline: 'rgb(0, 255, 0) solid 2px', outlineOffset: '2px'}}></iframe>

     
      
      <div className="fixed bottom-4 left-4 flex gap-2">
        
        <button
          onClick={() => router.push('/page-2')}
          className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
        >
          Previous Page
        </button>
        
      </div>
    </div>
  );
}