import React from 'react';
import './list.css';

const List = () => {
  return (
    <section>
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='body col-lg-12'>

          <div className='card col-lg-12'>
            <div className='cardBody'>
                <div className='row cardHeader'>
                    <div className='izq col-lg-6'>
                        <a href='./workplace'><h1>Titulo Prueba</h1></a>
                    </div>
                    <div className='der col-lg-6'>
                    <p>Kendall Brown</p>
                    </div>
                    <div className='col-lg-12'>
                        <h5>12/05/2023</h5>
                    </div>
                </div>
                <div className='cardDesc'>
                    <p>Along with the above updates, the following features will soon be retired from Blogger (over the next few months) due to low usage and to allow the Blogger team to focus on developing new features:</p>
                </div>
            </div>
          </div>

          <div className='card col-lg-12'>
            <div className='cardBody'>
                <div className='row cardHeader'>
                    <div className='izq col-lg-6'>
                        <a href='./workplace'><h1>Titulo Prueba</h1></a>
                    </div>
                    <div className='der col-lg-6'>
                        <p>Kendall Brown</p>
                    </div>
                    <div className='col-lg-12'>
                        <h5>12/05/2023</h5>
                    </div>
                </div>
                <div className='cardDesc'>
                    <p>Along with the above updates, the following features will soon be retired from Blogger (over the next few months) due to low usage and to allow the Blogger team to focus on developing new features:</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
  );
};

export default List;