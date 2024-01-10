window.addEventListener('scroll', function() {
 const nav = document.getElementById('navbar');
 const scrollTrigger = document.getElementById('scroll-trigger');
 const navHeight = nav.offsetHeight;
 const distanceFromTop = window.scrollY;
 const overlay = document.getElementById('dark-overlay');

 if (window.scrollY >= scrollTrigger.offsetTop - navHeight) {
   nav.style.position = 'absolute';
   nav.style.top = scrollTrigger.offsetTop - navHeight + 'px';
 } else {
   nav.style.position = 'fixed';
   nav.style.top = '0';
 }

 if (distanceFromTop > 200) { 
  overlay.classList.add('fade-in-overlay');
  nav.style.backgroundColor = 'var(--main-lightblue)';
} else {
  overlay.classList.remove('fade-in-overlay');
  nav.style.backgroundColor = 'var(--main-darkblue)';
}
});

document.addEventListener('DOMContentLoaded', function () {
 const container = document.querySelector('.cap');
 const ul = document.getElementById('cap');
 const itemCount = ul.children.length;
 const cloneCount = 3;
 let currentItemCount = itemCount;

 function createItems(count) {
   for (let i = 0; i < count; i++) {
     const newItem = document.createElement('li');
     newItem.className = 'item';
     newItem.innerHTML = `
     <figure>
       <figcaption>Jane</figcaption>
       <p>
        Ecosphere has completely transformed my social experience online. 
        It's not just a chat app; it's a haven of genuine connections. 
        I've met incredible people, and the emphasis on building a friendship zone truly sets it apart. 
        Thanks, Ecosphere, for making chatting meaningful and delightful!
       </p>
      </figure>
      <figure>
        <figcaption>Sophie</figcaption>
         <p>
          Ecosphere is the epitome of what a chat app should be. 
          The diverse range of chat options caters to every interest, 
          and the vibrant community makes it a joy to be a part of. 
          It's my go-to app for fostering connections and expanding my social circle.
         </p>
       </figure>
       <figure>
         <figcaption>Max</figcaption>
         <p>
          Ecosphere is not just an app; it's an adventure waiting to unfold.
          I've explored unique chat zones and met fascinating people from around the world.
          The app's commitment to creating a positive and inclusive space is commendable. 
          Here's to many more adventures in Ecosphere!
         </p>
        </figure>
        <figure>
         <figcaption>Carlos</figcaption>
         <p>
          Ecosphere is not just an app; it's a passport to global friendships. 
          As a traveler, I've connected with fellow adventurers, swapped travel stories, 
          and even found local guides. Ecosphere has become an essential companion on my journeys.
         </p>
        </figure>
        <figure>
         <figcaption>Lily</figcaption>
         <p>
          Every interaction on Ecosphere feels like a warm smile. 
          The app's cheerful design and emphasis on fostering friendships make 
          it my happy place online. I've encountered kindness and positivity, 
          turning Ecosphere into my go-to destination for spreading smiles through chats.
         </p>
        </figure>
        <figure>
         <figcaption>Ellisa</figcaption>
         <p>
          Ecosphere has brought genuine joy to my online interactions. 
          The positive energy radiating from every chat room is contagious. 
          I've built meaningful connections with wonderful people, 
          turning Ecosphere into my daily dose of happiness and camaraderie.
         </p>
        </figure>
     `;
     ul.appendChild(newItem);
   }
 }

 container.addEventListener('scroll', function () {
   const scrollLeft = container.scrollLeft;
   const containerWidth = container.clientWidth;
   const scrollWidth = ul.scrollWidth;

   if (scrollLeft + containerWidth >= scrollWidth - 10) {
     createItems(cloneCount);
     currentItemCount += cloneCount;
   }
 });
});

document.addEventListener('DOMContentLoaded', function () {
 const container = document.querySelector('.cap');
 const ul = document.getElementById('cap');
 const scrollLeftButton = document.getElementById('scroll-left');
 const scrollRightButton = document.getElementById('scroll-right');
 const scrollAmount = 500; 

 scrollLeftButton.addEventListener('click', function () {
   container.scrollLeft -= scrollAmount;
 });

 scrollRightButton.addEventListener('click', function () {
   container.scrollLeft += scrollAmount;
 });
});


