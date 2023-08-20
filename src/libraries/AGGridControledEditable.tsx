import { ColDef, RowClickedEvent } from 'ag-grid-community'
import { AgGridReact } from 'ag-grid-react'
import { useState } from 'react'

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

export default function AGGridControledEditable() {
  /**
   * This component show how to control editable state every rows.
   */

  const [editable, setEditable] = useState(true)
  const toggleEditable = (params: RowClickedEvent) =>
    setEditable(params.data.editable)

  const columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ]
  columnDefs.forEach((columnDef) => (columnDef.editable = editable))

  const [rowData] = useState([
    { make: 'editable', model: 'editable', price: 35000, editable: true },
    { make: 'editable', model: 'editable', price: 32000, editable: true },
    {
      make: 'not editable',
      model: 'not editable',
      price: 72000,
      editable: false,
    },
  ])

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        onCellClicked={(params) => toggleEditable(params)}
      ></AgGridReact>
    </div>
  )
}
