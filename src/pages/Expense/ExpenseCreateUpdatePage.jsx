import { Fragment, Suspense } from 'react';
import ExpenseCreateUpdate from '../../components/Expense/ExpenseCreateUpdate';
import LazyLoader from '../../components/MasterLayout/LazyLoader';
import MasterLayout from '../../components/MasterLayout/MasterLayout';

const ExpenseCreateUpdatePage = () => {
   return (
      <Fragment>
         <MasterLayout>
            <Suspense fallback={<LazyLoader />}>
               <ExpenseCreateUpdate />
            </Suspense>
         </MasterLayout>
      </Fragment>
   );
};

export default ExpenseCreateUpdatePage;
