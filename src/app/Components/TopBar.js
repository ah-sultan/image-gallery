import { useEffect, useState } from "react"

export const TopBar = ({

  deletedId,
  setDeletedId,
  handleDeleteImg

}) => {

  const [checked, setChecked] = useState(true)

  useEffect(() => {

    if (deletedId.length > 0) {
      setChecked(true)
    } else {
      setChecked(false)
    }

  }, [checked, deletedId])

  // Images Deselect Handler
  const handleChecked = () => {
    setChecked(false)
    setDeletedId([])
  }

  return (
    <>
      <div className="flex items-center justify-between min-h-[40px]">
        {
          deletedId.length > 0 ?

            <div className="flex gap-x-3">
              <input
                type="checkbox"
                checked={checked}
                value={checked}
                name="checkbox"
                className="w-5 h-5"
                onChange={handleChecked} />

              <span>{deletedId.length} Files Selected</span>
            </div> :
            <span className="text-lg font-medium">Gallery</span>
        }
        <div className="button-section">
          {deletedId.length > 0 &&
            <button
              onClick={() => handleDeleteImg()}
              type="button"
              className="text-red-500 font-medium hover:underline"
            >Deleted Files
            </button>
          }
        </div>
      </div>
    </>
  )
}
