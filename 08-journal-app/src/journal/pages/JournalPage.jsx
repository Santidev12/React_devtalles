/* eslint-disable no-unused-vars */
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView, NoteView } from "../views"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal"

export const JournalPage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.journal )

  const onClickNewNote = () => {
    dispatch( startNewNote() )
  }
  return (
    <>
    <JournalLayout>
      {/* <Typography component='h1'>Lorem velit magna voluptate reprehenderit fugiat. Laborum ea minim sit pariatur occaecat nisi occaecat minim tempor quis. Tempor amet tempor proident reprehenderit. Laborum ipsum incididunt consequat duis deserunt ea sit occaecat.</Typography> */}

      {
        (active)
        ? <NoteView />
        : <NothingSelectedView />
      }
      

      <IconButton
        onClick={onClickNewNote}
        disabled={ isSaving }
        size="large"
        sx={{ 
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.8},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
    </>
  )
}
