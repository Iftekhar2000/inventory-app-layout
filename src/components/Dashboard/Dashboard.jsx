const Dashboard = () => {
   return (
      <div className="container-fluid">
         <div className="row">
            <div className="col-md-3 p-2">
               <div className="card">
                  <div className="card-body">
                     <span className="h5">taka</span>
                     <p>Total Expense</p>
                  </div>
               </div>
            </div>
            <div className="col-md-3 p-2">
               <div className="card">
                  <div className="card-body">
                     <span className="h5">taka</span>
                     <p>Total Sale</p>
                  </div>
               </div>
            </div>
            <div className="col-md-3 p-2">
               <div className="card">
                  <div className="card-body">
                     <span className="h5">taka</span>
                     <p>Total Purchase</p>
                  </div>
               </div>
            </div>
            <div className="col-md-3 p-2">
               <div className="card">
                  <div className="card-body">
                     <span className="h5">taka</span>
                     <p>Total Return</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-md-6 p-2">
               <div className="card">
                  <div className="card-body">
                     <span className="h6">Expense Last 30 Days</span>
                     area chart
                  </div>
               </div>
            </div>
            <div className="col-md-6 p-2">
               <div className="card">
                  <div className="card-body">
                     <span className="h6">Sales Last 30 Days</span>
                     area chart
                  </div>
               </div>
            </div>
            <div className="col-md-6 p-2">
               <div className="card">
                  <div className="card-body">
                     <span className="h6">Purchase Last 30 Days</span>
                     areak chart
                  </div>
               </div>
            </div>
            <div className="col-md-6 p-2">
               <div className="card">
                  <div className="card-body">
                     <span className="h6">Return Last 30 Days</span>
                     area chart
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
export default Dashboard;
