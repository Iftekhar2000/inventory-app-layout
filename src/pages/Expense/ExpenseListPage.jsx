import { Fragment, Suspense } from 'react';
import ExpenseList from '../../components/Expense/ExpenseList';
import LazyLoader from '../../components/MasterLayout/LazyLoader';
import MasterLayout from '../../components/MasterLayout/MasterLayout';

const ExpenseListPage = () => {
   return (
      <Fragment>
         <MasterLayout>
            <Suspense fallback={<LazyLoader />}>
               <ExpenseList />
            </Suspense>
         </MasterLayout>
      </Fragment>
   );
};

export default ExpenseListPage;
