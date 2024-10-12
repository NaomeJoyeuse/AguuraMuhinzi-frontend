import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import IcoFacebook from "../asesst/Icons/Ico_facebook.tsx";
import IcoInstagram from "../asesst/Icons/Ico_instagram.tsx";
import IcoTwitter from "../asesst/Icons/Ico_twitter.tsx";
import { fadein } from "../Styles/keyframes.tsx";
import Flex from "../Styles/styledComponent/Flex.ts";
import Text from "../Styles/styledComponent/Text.ts";

function Main() {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleJoinCommunity = () => {
        navigate("/signup"); // Navigate to the signup page
    };

    return (
        <Flex 
            dir={"column"} 
            justify="around" 
            css={{
                width: "100%",
                height: "100%", 
                opacity: "0",
                animation: `1s ease-in 1s 1 both ${fadein}`,
                boxSizing: "border-box",
                padding: "0",
            }}
        >
            <Text css={{
                display1: "800",
                paddingTop: "$7",
                "@bp2": {
                    display2: "800",
                },
                "@bp4": {
                    display3: "800"
                },
                "@bp5": {
                    headline1: "800"
                }
            }}>
                AguuraMuhinzi <br />
                Sustainable Connections <br />
                Nourishing Futures. 
            </Text>

            <Text css={{
                paddingTop: "$7",
                subhead1: "600",
                "@bp4": {
                    paddingTop: "$1",
                    subhead1: "600"
                }
            }}>
                Aguura Muhinzi connects conscious consumers with local farmers and cooperatives, offering fresh, high-quality products<br />
                By supporting sustainable agriculture, you empower communities and make a positive impact with every purchase.
            </Text>

            <Flex css={{ paddingTop: "$8" }}>
                <Text 
                    cursor={"click"} 
                    css={{
                        color: "$onPrimary",
                        backgroundColor: "$primary",
                        headline6: "600",
                        padding: "$1 $3",
                        borderRadius: "8px",
                        boxShadow: "$1dp",
                        "&:hover": {
                            color: "$primary",
                            backgroundColor: "$primary200",
                        },
                        "&:active": {
                            boxShadow: "none",
                            color: "$onPrimary",
                            backgroundColor: "$primary600",
                        }
                    }}
                    onClick={handleJoinCommunity} // Add onClick handler
                >
                    Join Our Community
                </Text>
                <Text cursor={"click"} css={{
                    border: "1px solid $primary",
                    color: "$primary",
                    backgroundColor: "$primary200",
                    headline6: "600",
                    padding: "$1 $3",
                    borderRadius: "8px",
                    marginLeft: "$3",
                    "&:hover": {
                        color: "$primary",
                        backgroundColor: "$primary600",
                    },
                    "&:active": {
                        boxShadow: "none",
                        color: "$onPrimary",
                    }
                }}>
                    Browse Our Products
                </Text>
            </Flex>

            <Text css={{
                subhead2: "500",
                color: "$onBg800",
                paddingTop: "$2"
            }}>
                Support Local Farmers: Buy directly from the source and help sustain local economies.
            </Text>

            <Flex justify={"end"} css={{
                width: "100%",
                "& svg": {
                    fill: "$onBg800",
                    cursor: "pointer",
                    marginRight: "$3",
                    "&:hover": {
                        fill: "$onBg",
                        transform: "scale(1.1)",
                    }
                }
            }}>
                <IcoFacebook width="32" height="32" />
                <IcoInstagram width="32" height="32" />
                <IcoTwitter width="32" height="32" />
            </Flex>
        </Flex>
    );
}

export default Main;
