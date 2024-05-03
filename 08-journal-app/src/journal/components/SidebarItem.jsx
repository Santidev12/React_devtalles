/* eslint-disable react/prop-types */
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material'
import { useMemo } from 'react'
import { setActiveNote } from '../../store/journal/journalSlice'
import { useDispatch } from 'react-redux'

export const SidebarItem = ({ title = '', body, id, date, imageUrls = [] }) => {

    const dispatch = useDispatch();

    const newTitle = useMemo( () => {
        return title.length > 17
            ? title.substring(0,17) + '...'
            : title
    }, [ title ])

    const onClickActiveNote = () => {
        dispatch( setActiveNote({ title, body, id, date, imageUrls } ) )
      }

  return (
    <ListItem disablePadding>
    <ListItemButton onClick={onClickActiveNote}>
        <ListItemIcon>
            <TurnedInNot />
        </ListItemIcon>
        <Grid container direction="row">
            <Grid>
                <ListItemText primary={ newTitle }/>
                <ListItemText className='' secondary={ body }/>
            </Grid>
        </Grid>
    </ListItemButton>
</ListItem>
  )
}
