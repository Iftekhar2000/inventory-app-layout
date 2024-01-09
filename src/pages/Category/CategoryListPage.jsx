import { Fragment, Suspense } from 'react';
import CategoryList from '../../components/Category/CategoryList';
import LazyLoader from '../../components/MasterLayout/LazyLoader';
import MasterLayout from '../../components/MasterLayout/MasterLayout';

const CategoryListPage = () => {
   return (
      <Fragment>
         <MasterLayout>
            <Suspense fallback={<LazyLoader />}>
               <CategoryList />
            </Suspense>
         </MasterLayout>
      </Fragment>
   );
};

export default CategoryListPage;
