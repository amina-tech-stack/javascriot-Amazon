const xhr = new XMLHttpRequest();
xhr.addEventListener('load', ()=>
{
    console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();
// we cannot have response here because the response is waiting for the respose (not defined if u use it directly) it depends on having response loaded like multiprogramme in SE 

