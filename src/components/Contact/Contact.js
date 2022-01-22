import "./Contact.scss";
import Map from "../Map/Map";
import { useTranslation } from "react-i18next";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Contact = () => {
    const { t, i18n } = useTranslation();

    const location = {
        adress: 'Oil Food Technologies Ltd.',
        lat: 43.560662432404285,
        lng: 27.80585356967901
    };

    return (
        <div className="contact" id="contact">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6}>
                        <Item> <Map location={location} zoomLevel={17} /></Item>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>

                        <Typography variant="h2" gutterBottom component="div" align="center" class="map-h2">
                            {t("contact_title")}
                        </Typography>
                        <Grid container spacing={5}>

                            <Grid item xs={6}>
                                <Item>
                                    <span>{t("contact_name_one")}</span>
                                    <br />
                                    <span>{t("contact_type")}</span>
                                    <br />
                                    <span>+359 123 123</span>
                                    <br />
                                    <span>arnaudov@gmail.com</span>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <span>{t("contact_name_two")}</span>
                                    <br />
                                    <span>{t("contact_type")}</span>
                                    <br />
                                    <span>+359 123 123</span>
                                    <br />
                                    <span>arnaudov@gmail.com</span>
                                </Item>
                            </Grid>

                            <Grid item xs={12}>

                                <div className="bottom">
                                    <img src="assets/shake.svg" alt="" />
                                </div>
                            </Grid>
                        </Grid> { /* Ends container */}
                    </Grid>
                </Grid> { /* Ends container */}
            </Box>
        </div >
    )
}

export default Contact;
