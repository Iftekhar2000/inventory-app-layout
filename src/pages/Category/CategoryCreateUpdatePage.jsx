import { Fragment, Suspense } from 'react';
import CategoryCreateUpdate from '../../components/Category/CategoryCreateUpdate';
import LazyLoader from '../../components/MasterLayout/LazyLoader';
import MasterLayout from '../../components/MasterLayout/MasterLayout';

const CategoryCreateUpdatePage = () => {
   return (
      <Fragment>
         <MasterLayout>
            <Suspense fallback={<LazyLoader />}>
               <CategoryCreateUpdate />
            </Suspense>
         </MasterLayout>
      </Fragment>
   );
};

export default CategoryCreateUpdatePage;
