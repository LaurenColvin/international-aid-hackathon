import React from 'react'

function Foundation({children}) {
  return (
      <div className="h-[calc(100%_-_4rem)]">
          {children}
      </div>
  )
}

export default Foundation

