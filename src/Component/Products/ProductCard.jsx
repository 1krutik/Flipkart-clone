import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  console.log(item.category)
  return (
    <div style={{ backgroundColor: "#F2F3F4", marginTop: "20px" }}>
      <div className="card" style={{ width: "18rem", textAlign: "center" }}>
        <Link to={`/alldata/${item.category}`}>
          <img
            src={item.img}
            className="card-img-top "
            style={{
              padding: "0px 30px",
              width: "100%",
              height: "300px",
              objectPosition: "top",
              objectFit: "cover",
            }}
            alt="..."
          />
        </Link>
        <div className="card-body">
          <p
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            className="card-title"
          >
            {item.name}
          </p>
          <h5  className="card-text text-success">{item.Discount}</h5>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
