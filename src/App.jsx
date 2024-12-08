import { Card } from "react-bootstrap";
import bgImage from "./assets/img/header-bg.png"
import logo from "./assets/logo.svg"
import friedChickenImage from "./assets/img/fried-chicken/fried-chicken.png"
import nuggetImage from "./assets/img/fried-chicken/nugget.png"
import applePieImage from "./assets/img/desserts/apple-pie.png"
import iceCreamImage from "./assets/img/desserts/ice-cream.png"

function Category({ title, foods }) {
  return (
    <>
      <div className="mx-3 mb-4">
          <h3 className="fw-bold m-0 ms-3">{title}</h3>
          <hr/>
          <div className="w-100 d-flex flex-wrap gap-3">
            {foods}
          </div>
      </div>
    </>
  );
}

const friedChicken = (
  <>
    <MenuItem
      name="2pc Fried Chicken Set"
      price="RM 10.00"
      foodImage={friedChickenImage}
      nutritionInfo={{ calories: 540, protein: 31, carbs: 35, fat: 29 }}
    />
    <MenuItem
      name={"6 piece nugget"}
      price={"RM 6.00"}
      foodImage={nuggetImage}
      nutritionInfo={{ calories: 270, protein: 13, carbs: 16, fat: 16 }}
    />
  </>
)

const desserts = (
  <>
    <MenuItem
      name={"Ice Cream"}
      price={"RM 5.00"}
      foodImage={iceCreamImage}
      nutritionInfo={{ calories: 207, protein: 2, carbs: 33, fat: 6 }}
    />
    <MenuItem
      name={"Apple Pie"}
      price={"RM 2.00"}
      foodImage={applePieImage}
      nutritionInfo={{ calories: 270, protein: 1, carbs: 43, fat: 10 }}
    />
  </>
);

function MenuItem({ name, price, foodImage, nutritionInfo }) {
  return (
    <>
        <Card style={{ width: '25rem' }} className="mx-3">
          <Card.Img variant="top" src={foodImage} className="mb-3"/>
          <Card.Body className="d-flex flex-column align-items-center justify-content-center gap-3">
            <Card.Title className="fw-bold">{name}</Card.Title>
            <div className="d-flex gap-3 border-top border-bottom">
              <div className="d-flex flex-column align-items-center">
                <p className="m-0"><strong>{nutritionInfo.calories}</strong></p>
                <p className="m-0">kcal</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <p className="m-0"><strong>{nutritionInfo.protein}</strong></p>
                <p className="m-0">Protein(g)</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <p className="m-0"><strong>{nutritionInfo.carbs}</strong></p>
                <p className="m-0">Carbs(g)</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <p className="m-0"><strong>{nutritionInfo.fat}</strong></p>
                <p className="m-0">Fat(g)</p>
              </div>
            </div>
            <p className="price text-secondary"><strong>{price}</strong></p>
          </Card.Body>
        </Card>
    </>
  )
}

function App() {
  return (
    <>
        <img src={bgImage} className="w-100" style={{ maxHeight: '288px' }}/>
        <div id="logo-container" className="d-flex flex-column align-items-center justify-content-center mb-3" >
          <img src={logo} alt="logo" className="mb-3 border border-white border-4 rounded-circle img-fluid" style={{ margin: '-70px'}}/>
          <h1 className="fw-bold fs-1">Uncle Wallace Food Menu</h1>
        </div>
        <Category title={"Fried Chicken"} foods={friedChicken}/>
        <Category title={"Desserts"} foods={desserts} />
    </>
  );
}

export default App;
