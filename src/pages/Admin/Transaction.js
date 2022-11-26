import React, {
    Container,
    Table,
    Button,
}
from "react-bootstrap";
import success from "../../Assets/Img/success.svg";
import cancel from "../../Assets/Img/cancel.svg";

const Transaction = () => {
    return (
      <Container>
      <h2 className="mt-5" style={{color: "red"}}>Income Transaction</h2>
      <Table className="border border-2 my-5" bordered hover responsive>
        <thead style={{ backgroundColor: "#E5E5E5" }}>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Address</th>
            <th>Post Code</th>
            <th>Income</th>            
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Sugeng No Pants</td>
            <td>Cileungsi</td>
            <td>16820</td>
            <td>69.000</td>
            <td className="d-flex text-warning justify-content-center">
              Waiting Approve
            </td>
            <td>
              <div className="d-flex justify-content-center">
                <Button variant="danger" size="sm" className="btn-table1 me-3">
                  Cancel
                </Button>
                <Button variant="success" size="sm" className="btn-table2">
                  Approve
                </Button>
              </div>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Haris Gams</td>
            <td>Serang</td>
            <td>42111</td>
            <td>30.000</td>
            <td className="d-flex text-success justify-content-center">
              Success
            </td>
            <td>
              <div className="d-flex text-success justify-content-center">
                <img src={success} />
              </div>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Aziz Union</td>
            <td>Bekasi</td>
            <td>13450</td>
            <td>28.000</td>
            <td className="d-flex text-danger justify-content-center">
              Cancel
            </td>
            <td>
              <div className="d-flex text-success justify-content-center">
                <img src={cancel} />
              </div>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Lae Tanjung Balai</td>
            <td>Tanjung Balai</td>
            <td>21331</td>
            <td>30.000</td>
            <td
              className="d-flex justify-content-center"
              style={{ color: "#00D1FF" }}
            >
              On The Way
            </td>
            <td>
              <div className="d-flex text-success justify-content-center">
                <img src={success} />
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
    );
}

export default Transaction;