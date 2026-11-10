import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import { PropertyCollection, propertyCollections } from './components/PropertyBands';
export { propertyCollections };
export function renderRoute(url:string){return renderToString(<StaticRouter location={url}><Routes><Route path="/" element={<Index/>}/><Route path="/collections/:slug" element={<PropertyCollection/>}/></Routes></StaticRouter>);}
