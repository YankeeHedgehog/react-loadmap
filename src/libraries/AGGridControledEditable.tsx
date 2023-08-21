import { ColDef, EditableCallbackParams } from 'ag-grid-community'
import { AgGridReact } from 'ag-grid-react'
import { useState } from 'react'

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

type TRow = {
  make: string
  model: string
  price: number
  editable: boolean
}

export default function AGGridControledEditable() {
  /**
   * This component show how to control editable state every rows.
   */

  const editableColumnCallback = (params: EditableCallbackParams<TRow>) =>
    params.data?.editable || false

  const columnDefs: ColDef[] = [
    { field: 'make', editable: editableColumnCallback },
    { field: 'model', editable: editableColumnCallback },
    {
      field: 'price',
      editable: editableColumnCallback,
    },
  ]

  const [rowData] = useState<TRow[]>([
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
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  )
}
