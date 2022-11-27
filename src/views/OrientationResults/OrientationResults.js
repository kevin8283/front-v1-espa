import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { api } from '../../services'
import "./OrientationResults.css"
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

export default function OrientationResults() {
  const [mentions, setMentions] = useState([])
  const [displayableResults, setDisplayableResults] = useState([])
  const location = useLocation()
  const data = location.state.results

  useEffect(() => {
    api.fetchMentions()
        .then(result => {
            setMentions(result.data)
        })
        .catch(e => {
          throw e
        })
  }, [])

  useEffect(() => {
    data.forEach(result => {
        for (let i = 0; i < mentions.length; i++) {
          if (result.field === mentions[i].sigle) {
            if (displayableResults.length < 5) {
            setDisplayableResults(state => [...state, mentions[i]])
            break
          }
        }
      }
  })
  }, [mentions])

  const displayResults = () => {
    return displayableResults.map((item, index) => {
      return (
        <ListItem alignItems="flex-start" key={index} className="orientation-results-list-item">
          <span className="mention-rank">{index + 1}</span>
          <ListItemText
            primary={item.nom}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Parcours: 
                </Typography>
                {item.parcours.master.length !==0 ? `${item.parcours?.master[0]} ${item.parcours?.master[1]}` : ""}
              </React.Fragment>
            }
          />
        </ListItem>
      )
    })
  }

  return (
    <div className="orientation-results">
      <header className="orientation-results-header">
        <div className="orientation-results-header-title">
          Parcours recommandés pour vous selon vos compétences
        </div>
        <div className="orientation-results-header-sub-title">
          Ces données proviennent des calculs d'un modèle de Réseau de Neurones
        </div>
      </header>
      <main className="orientation-results-body">
        <List
          sx={{ width: "100%", maxWidth: 360 }}
          className="orientation-results-list-container"
        >
            {displayResults()}
        </List>
      </main>
    </div>
  )
}
