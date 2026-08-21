import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Ensure browser tab favicon updates immediately with sRGB base64 data
(() => {
  const b64Favicon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH6ggVEQcP7qY8OQAABB9JREFUeNrt1luMXVMcx/HPnp7e7x13ShoVSStuSSMuIRJvlGRc44USEo14QCIqFTLhUSReSFAPQkKU1F1E4h5FhYaiwahWac1MW51pazrneNi/Yw5pXR6xvsnK2XvPXmv9/7//b/33UCgUCoVCoVAoFAqFQqFQKBQKhUKhUCj8L6i6e3rPwyL8hEexHefieKzE3Ly7EB9hAUYwgKOwBQehD4fjKxyCz3AwJmEWdmXtuZiIQczAE7m/DKN4DPNwDr7N/aG4BF14J/EOoJl9F2Tu0zgr681PLOMxARV2YFzi3YDJDVyBi7A2Ce/BNTgdb2ExZuJMPIklWBfBzsaHSWptArs/wizBq/gCN2An1uAMHIbVOAYv4Ujcht14AxfgJryMT3AzLk0BhnB7xHwB23AL1uPt7Ds5QjyIk5P8FHyDA1PM1/FEV6oEWxPkJByAzUlyZp6NpMJT8HOezcCnuBHvRt0BvI+p6MG0VGR2qtVKZYbign4MZ/1x2a8d03w8nAJ9id5UrgvPRvxFccJghG2vtT37HYzv885A5q7HQzitK4pIsnsy+edY6uhMGEgCU7PoSFRupirP4eMkdyyWYlWSOSXzGtiE6RFoVo7PEL7OkZmGE1IAiWEtlsUBz8R963BinLIer0Ssi3PdihCnJvanUtA+vJkYLm8fgTkdDtgbER7Bdbgwtm+oe8LTOW9dqX6F9zoE/DzVPTabv5tKzU+CffggAfXE8qMJbhnOjyNmZ80HcF/iauXZelyLk3L9Hl6M1fsj8tXZ5y71ue+LW4bUvWh19n676u7pHU4178Cd2aShbmQt/BBrdkfNCbkfn/Fjkhgfu+1IAu2G2J/nu+KsaR2/DWPNrMreh+H5CH0FHu9fudzfobunl7r/vITX1L1n9M/mN9Tns6luJqB/5fK92NjxXrtK4pB9MdIxZ4e6g7fZ1HE9mN9tf5jfSgK7Iuq8VF53T6+/K0KEnYKtWq1RVfWnLzfUFe7GSEtl4KpllcVXTshCU9XumByhJhqrfEPthCpjXIRsdog2GmFGItwetfWGM3bmvmlJ+2trG25VH5v3fxftiu8kloXqL89I3t+Gwf7jjtjSfXfvNIxvVdXWgeuXT7Jh44EWXzlTfe5nJKdd6uPT1/4MHoXVrYmT2NEvCh6qtu4cdcOa3iHIRPVRaKj7AWMWbmXsTYC/ZMNhtfW3q22/Rd2df3NUqtxUfy7X7KdoU9WN9YTM3RyHfW3j7p2JrwvbDQ5Nj5Bz1Uf6oOTS/n9g4/79UavdTuyvxr5o/WE0O67bfx8TbcwB+6eOqUqCEzqEbqLVvWpFq1VVx1Xcg3tbvDBw8dLK7mGZM86YU0fQrP56138P6SENdZXbHf+f9I9CoVAoFAqFQqFQKBQKhUKhUCgUCoXCf5ZfASEHSoNMfMtBAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI2LTA4LTIxVDE3OjA3OjE1KzAwOjAwkarzzwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNi0wOC0yMVQxNzowNzoxNSswMDowMOD3S3MAAAAASUVORK5CYII=";
  
  const setFavicon = (url: string) => {
    let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.type = 'image/png';
    link.href = url;
  };
  setFavicon(b64Favicon);
})();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

