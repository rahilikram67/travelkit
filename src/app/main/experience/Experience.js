import {useState} from "react"
import { styled } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { useTranslation } from 'react-i18next';
import ButtonAppBar from './comps/Experience/ExperienceToolbar/toolbar';
import { Box } from "@mui/material"
import Searchbar from './comps/Experience/Searchbar/Searchbar';
import DataTable from "./comps/Experience/DataTable/DataTable";
const Root = styled(FusePageSimple)({
  '& .FusePageSimple-header': {},
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
});

function ExperiencePage(props) {
  const { t } = useTranslation('examplePage');
  const [search, setSearch] = useState({value:"",select:"status"});
  return (
    <Root

      contentToolbar={
        <ButtonAppBar />
      }
      content={
        <div className="md:p-24 mt-52 md:mt-10">
          <Box className='border-2 h-56 mx-32 rounded'>
            <Searchbar search={search} setSearch={setSearch} />
          </Box>
          <DataTable search={search} />
        </div>
      }
    />
  );
}

export default ExperiencePage;
