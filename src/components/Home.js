import Header from './Header';
import Summary from './Summary';
import TechnicalProficiency from './TechnicalProficiency';
import Experience from './Experience';
import Education from './Education';

function Home() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <Header />
                <Summary />
              </div>
            </div>
            <div className="card mt-3 mb-3">
              <div className="card-body">
                <TechnicalProficiency />
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <Education />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <Experience />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Home;