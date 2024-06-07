import React, { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'

const View = () => {
    const {id} = useParams();
    const [pro, setProduct] = useState({});

    const fetchProject = async () => {
        const res = await fetch("http://localhost:3000/project/getbyid/" + id);
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setProduct(data);
        };
      }
        useEffect(() => {
            fetchProject();
        }, [id]);
    

  return (
    
  <>
  <div className="container">
    <div className="imgBx">
      <img
        src="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true"
        alt="Nike Jordan Proto-Lyte Image"
      />
    </div>
    <div className="details">
      <div className="content">
        <h2>
          Jordan Proto-Lyte <br />
          <span>Running Collection</span>
        </h2>
        <p>
          Featuring soft foam cushioning and lightweight, woven fabric in the
          upper, the Jordan Proto-Lyte is made for all-day, bouncy comfort.
          Lightweight Breathability: Lightweight woven fabric with real or
          synthetic leather provides breathable support. Cushioned Comfort: A
          full-length foam midsole delivers lightweight, plush cushioning.
          Secure Traction: Exaggerated herringbone-pattern outsole offers
          traction on a variety of surfaces.
        </p>
        <p className="product-colors">
          Available Colors:
          <span
            className="black active"
            data-color-primary="#000"
            data-color-sec="#212121"
            data-pic="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true"
          />
          <span
            className="red"
            data-color-primary="#7E021C"
            data-color-sec="#bd072d"
            data-pic="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_red_black.png?raw=true"
          />
          <span
            className="orange"
            data-color-primary="#CE5B39"
            data-color-sec="#F18557"
            data-pic="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_orange_black.png?raw=true"
          />
        </p>
        <h3>Rs. 12,800</h3>
        <button>Buy Now</button>
      </div>
    </div>
  </div>
  {/* Footer */}
  <footer>
    <a href="https://stylustechnepal.com" target="_blank">
      anuzbvbmaniac123@gmail.com
    </a>
  </footer>
</>
)
}

export default View