import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso,type TableComponents } from 'react-virtuoso';

interface Data {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  phone: string;
  state: string;
}

interface ColumnData {
  dataKey: keyof Data;
  label: string;
  numeric?: boolean;
  width?: number;
}



const columns: ColumnData[] = [
  {
    width: 100,
    label: 'First Name',
    dataKey: 'firstName',
  },
  {
    width: 100,
    label: 'Last Name',
    dataKey: 'lastName',
  },
  {
    width: 50,
    label: 'Age',
    dataKey: 'age',
    numeric: true,
  },
  {
    width: 110,
    label: 'State',
    dataKey: 'state',
  },
  {
    width: 130,
    label: 'Phone Number',
    dataKey: 'phone',
  },
];



const rows: Data[] =  [
  {"id": 1, "firstName": "Juan", "lastName": "Suka", "age": 18, "phone": "+549111111111", "state": "BS AS"},
  {"id": 1, "firstName": "Juan", "lastName": "Suka", "age": 18, "phone": "+549111111111", "state": "BS AS"},
  {"id": 1, "firstName": "Juan", "lastName": "Suka", "age": 18, "phone": "+549111111111", "state": "BS AS"},
  {"id": 1, "firstName": "Juan", "lastName": "Suka", "age": 18, "phone": "+549111111111", "state": "BS AS"},
  {"id": 1, "firstName": "Juan", "lastName": "Suka", "age": 18, "phone": "+549111111111", "state": "BS AS"},
  {"id": 1, "firstName": "Juan", "lastName": "Suka", "age": 18, "phone": "+549111111111", "state": "BS AS"},
  {"id": 1, "firstName": "Juan", "lastName": "Suka", "age": 18, "phone": "+549111111111", "state": "BS AS"},
  {"id": 1, "firstName": "Juan", "lastName": "Suka", "age": 18, "phone": "+549111111111", "state": "BS AS"},
  {"id": 1, "firstName": "Juan", "lastName": "Suka", "age": 18, "phone": "+549111111111", "state": "BS AS"},
  {"id": 1, "firstName": "Juan", "lastName": "Suka", "age": 18, "phone": "+549111111111", "state": "BS AS"},
  {"id": 1, "firstName": "Juan", "lastName": "Suka", "age": 18, "phone": "+549111111111", "state": "BS AS"},
  {"id": 1, "firstName": "Juan", "lastName": "Suka", "age": 18, "phone": "+549111111111", "state": "BS AS"},
]



const VirtuosoTableComponents: TableComponents<Data> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableHead {...props} ref={ref} />
  )),
  TableRow,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? 'right' : 'left'}
          style={{ width: column.width }}
          sx={{ backgroundColor: 'background.paper' }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index: number, row: Data) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? 'right' : 'left'}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function Summary() {
  return (
    <Paper style={{ height: 250, width: '90%' }}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
