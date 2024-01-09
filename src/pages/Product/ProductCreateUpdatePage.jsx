import { Fragment, Suspense } from 'react';
import LazyLoader from '../../components/MasterLayout/LazyLoader';
import MasterLayout from '../../components/MasterLayout/MasterLayout';
import ProductCreateUpdate from '../../components/Product/ProductCreateUpdate';

const ProductCreateUpdatePage = () => {
   return (
      <Fragment>
         <MasterLayout>
            <Suspense fallback={<LazyLoader />}>
               <ProductCreateUpdate />
            </Suspense>
         </MasterLayout>
      </Fragment>
   );
};

export default ProductCreateUpdatePage;
