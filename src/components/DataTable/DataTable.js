import React from "react"
import { DataGrid } from "@mui/x-data-grid"

export default function DataTable({ rows, columns }) {
  return (
    <div style={{ height: 380, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  )
}
