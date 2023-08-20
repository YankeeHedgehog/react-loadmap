import { ColDef } from 'ag-grid-community'
import { AgGridReact } from 'ag-grid-react'
import { useState } from 'react'

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

export default function AGGridControledEditable() {
  // This repository show how to set editable state by rows.

  const [editable, setEditable] = useState(true)
  const toggleEditable = (params: any) => setEditable(params.data.editable) // will use RowClickedEvent<TData> type, but this sample isn't needed ts cause to need CrosTown and I'm tierd those settings.
  // [RowClickedEvent](https://www.ag-grid.com/javascript-data-grid/grid-events/#reference-selection-rowClicked)

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
      make: 'non editable',
      model: 'non editable',
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
