import './Hero.css'
function Hero(props){
return(
     <div className='hero'>
              <h1>{props.heading}</h1>
              <h1>{props.heading2}</h1>
            </div>
)

}
export default Hero;