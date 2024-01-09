import { Fragment, Suspense } from 'react';
import LazyLoader from '../../components/MasterLayout/LazyLoader';
import MasterLayout from '../../components/MasterLayout/MasterLayout';
import ExpenseReport from '../../components/Report/ExpenseReport';

const ExpenseReportPage = () => {
   return (
      <Fragment>
         <MasterLayout>
            <Suspense fallback={<LazyLoader />}>
               <ExpenseReport />
            </Suspense>
         </MasterLayout>
      </Fragment>
   );
};

export default ExpenseReportPage;
