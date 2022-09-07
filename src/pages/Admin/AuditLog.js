import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { Box, Card, CardContent, ListItem } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const AuditLog = (props) => {
  const [documents, setDocuments] = useState([]);
  const isCurrent = useRef();

  const displayDocuments = async () => {
    return (
      <React.Fragment>
        <Card>
          <CardContent>
            {documents.map((doc, idx) => (
              <ListItem key={idx}>{doc}</ListItem>
            ))}
          </CardContent>
        </Card>
      </React.Fragment>
    );
  };
  useEffect(() => {
  
    displayDocuments();
  });
  return <Box component="div">{displayDocuments}</Box>;
};

export default AuditLog;
