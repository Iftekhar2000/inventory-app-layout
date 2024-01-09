
const FullscreenLoader = () => {
   return (
      <>
         <div className={'d-none LoadingOverlay'}>
            <div className="Line-Progress">
               <div className="indeterminate" />
            </div>
         </div>
      </>
   );
};
export default FullscreenLoader;
