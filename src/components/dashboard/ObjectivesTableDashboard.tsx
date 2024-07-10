import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table"
import { Badge } from '@components/ui/badge'


function ObjectivesTableDashboard() {
  return (
    <section>
      <h3 className='font-bold text-lg'>Objetivos</h3>
      <Table>
        <TableHeader>
          <TableRow className="text-center border-none">
            <TableHead className="w-[100px]"></TableHead>
            <TableHead className="text-center align-middle"><Badge variant="ActionIconA">A</Badge></TableHead>
            <TableHead className="text-center align-middle"><Badge variant="ActionIconD">D</Badge></TableHead>
            <TableHead className="text-center align-middle"><Badge variant="ActionIconR">R</Badge></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="text-center border-none">
            <TableCell className="font-medium">Ideal</TableCell>
            <TableCell className="text-center">40</TableCell>
            <TableCell className="text-center">10</TableCell>
            <TableCell className="text-center">30</TableCell>
          </TableRow>
          <TableRow className="text-center border-none">
            <TableCell className="font-medium">Actual</TableCell>
            <TableCell className="text-center">42</TableCell>
            <TableCell className="text-center">4</TableCell>
            <TableCell className="text-center">6</TableCell>
          </TableRow>
          <TableRow className="text-center">
            <TableCell className="font-medium">Diferencia</TableCell>
            <TableCell className="text-center text-primary-green">+2</TableCell>
            <TableCell className="text-center text-primary-red">-6</TableCell>
            <TableCell className="text-center text-primary-red">-24</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  )
}

export default ObjectivesTableDashboard