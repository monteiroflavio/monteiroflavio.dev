import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Arial' }}>
      <h1>Monteiro Flávio&apos;s Website</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Image 
          src="/images/man-at-work.jpg" 
          alt="Man at work illustration" 
          width={300} 
          height={300} 
        />
      </div>
      <br/>
      <p>This site is currently under construction. Stay tuned!</p>
    </div>
  );
}
