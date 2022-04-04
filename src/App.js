import './App.css';
import { BasicTable } from './components/BasicTable';
import { SortingTable } from './components/SortingTable';
import { GlobalFilteringComponent } from './components/GlobalSortingFilter';
import { Pagination } from './components/Pagination';
import Widget from './components/FileSystem';
import JqueryTable from './JqueryTable/JqueryTable';
import Selection from './JqueryTable/Selection';
import TableWithOwnData from './JqueryTable/TableWithOwnData';
import HTMLtoPdf from './HTMLTOPDF/HTMLtoPdf';
import Functionss from './HTMLTOPDF/functionss';
import Testing from './HTMLTOPDF/testing';
import TemplateEngine from './HTMLTOPDF/TemplateEngine';
import { RowSelection } from './components/RowSelection';

function App() {
  return (
    <div className="App">
      { /* <Pagination />
     <Widget />}
      {<JqueryTable /> }
      {<TableWithOwnData />  }
      { <HTMLtoPdf /> }
      
      <RowSelection />
      <Testing />
      <TemplateEngine />*/ }
      <Selection />
    </div>
  );
}

export default App;
