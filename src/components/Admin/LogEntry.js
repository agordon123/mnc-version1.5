import React, { useEffect } from "react";
import { db, useAuth } from "../../firebase";
import { Box, Card, CardContent, CardHeader, Grid } from "@mui/material";
import { collection, query } from "firebase/firestore";

const LogEntry = (props) => {
  const { action, timestamp, description, userId, userName, docId } = props;
  const { isAdmin, user, userDoc, isLoggedIn } = useAuth();
  const auditLog = collection(db, "auditLogs");
  const logEntry = async () => {
    const q = await query(auditLog);
  };
  useEffect(() => {});

  return (
    <Box component="div" className="Listing">
      <Card className="audit-card">
        <CardHeader>
          <span> {action}</span>
          <span>{timestamp}</span>
        </CardHeader>
        <CardContent>
          <Grid container={true}>
            <Grid item></Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LogEntry;
