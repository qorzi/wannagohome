import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useRecoilState } from 'recoil';
import { countData } from '../../atom';

export default function Week() {

  return (
    <>
      <WeekBox>
        <TitleBox>C : {'>'} How many people wanna go home?.exe</TitleBox>
        <TableView/>
        <TitleBox>C : {'>'} ...</TitleBox>
      </WeekBox>
    </>
  )
}

const WeekBox = styled.div`
  font-family: 'DungGeunMo';
  font-size: 18px;
`

const TitleBox = styled.p`
  padding-top: 16px;
  padding-bottom: 16px;
`

function createData(
  day: string,
  count: any,
  difference: any,
) {
  return { day, count, difference };
}

function upToDown(data1:any, data2:any) {
  // data['0']['전체카운트']
  const difference = data1 - data2
  // console.log(difference)
  if (difference > 0) {
    return difference + ' ↑'
  } else if (difference < 0) {
    return difference + ' ↓'
  } else {
    return '-'
  }
}

interface RegionType {
  [key: string]: {
    [key: string]: number
  }
}

interface RegionDataType {
  [key: string]: RegionType | string | number
}

function TableView() {

  const [data, setData] = useRecoilState<RegionDataType[]>(countData)
  console.log(data)

  const rows = [
    createData('일요일', data['0']['전체카운트'], upToDown(data['0']['전체카운트'], data['6']['전체카운트'])),
    createData('월요일', data['1']['전체카운트'], upToDown(data['1']['전체카운트'], data['0']['전체카운트'])),
    createData('화요일', data['2']['전체카운트'], upToDown(data['2']['전체카운트'], data['1']['전체카운트'])),
    createData('수요일', data['3']['전체카운트'], upToDown(data['3']['전체카운트'], data['2']['전체카운트'])),
    createData('목요일', data['4']['전체카운트'], upToDown(data['4']['전체카운트'], data['3']['전체카운트'])),
    createData('금요일', data['5']['전체카운트'], upToDown(data['5']['전체카운트'], data['4']['전체카운트'])),
    createData('토요일', data['6']['전체카운트'], upToDown(data['6']['전체카운트'], data['5']['전체카운트'])),
  ];

  return (

    <StyledTable sx={{ minWidth: 550 }} size="small" aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>요일</TableCell>
          <TableCell align="left">집에 가고 싶어한 사람</TableCell>
          <TableCell align="left">전날대비</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.day}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.day}
            </TableCell>
            <TableCell align="left">{row.count}</TableCell>
            <TableCell align="left">{row.difference}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </StyledTable>

  )
}

const StyledTable = styled(Table)`

  border-top: 1px solid ${props => props.theme.color.defaultColor};
  border-left: 1px solid ${props => props.theme.color.defaultColor};
  border-right: 3px solid ${props => props.theme.color.defaultColor};
  border-bottom: 3px solid ${props => props.theme.color.defaultColor};
  border-radius: 0px;
  box-shadow: none;
  


  .MuiTableBody-root {
    background: none;
  }

  .MuiTableHead-root {
    background: ${props => props.theme.color.defaultColor};
  }

  .MuiTableCell-root {
    font-size: 18px;
  }

  .MuiTableCell-head {
    color: ${props => props.theme.color.defaultBgColor};
    font-family: 'DungGeunMo';
  }

  .MuiTableCell-body {
    color: ${props => props.theme.color.defaultColor};
    border-right: 1px solid ${props => props.theme.color.defaultColor};
    border-bottom: 0px solid ${props => props.theme.color.defaultColor};
    font-family: 'DungGeunMo';
  }
  .css-34nofg-MuiTableRow-root:last-child th {
    border-right: 1px solid ${props => props.theme.color.defaultColor};
  }

  .css-34nofg-MuiTableRow-root:last-child td {
    border-right: 1px solid ${props => props.theme.color.defaultColor};
  }
`

