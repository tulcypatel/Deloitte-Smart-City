<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="tryIt.aspx.cs" Inherits="ConcertFinder.tryIt" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <table>
                <tr>
                    <td>
                        <h1>Let&#39;s find a nearby event to have fun</h1>
                    </td>
                </tr>
            </table>
            <table>
                <tr>
                    <td>
                        <p>What's your city?</p>
                    </td>
                    <td>
                        
                        <asp:TextBox ID="city" runat="server" OnTextChanged="city_TextChanged">input: string value</asp:TextBox>
                        
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>What are you in the mood for?</p>
                    </td>
                    <td id="radioB">

                        <asp:RadioButtonList ID="RadioButtonList1" runat="server" AppendDataBoundItems="True" OnSelectedIndexChanged="RadioButtonList1_SelectedIndexChanged">
                            <asp:ListItem>Art</asp:ListItem>
                            <asp:ListItem>Events</asp:ListItem>
                            <asp:ListItem>Festivals</asp:ListItem>
                            <asp:ListItem>Jazz</asp:ListItem>
                            <asp:ListItem>Music</asp:ListItem>
                            <asp:ListItem>Sports</asp:ListItem>
                            <asp:ListItem>Theater</asp:ListItem>
                            
                        </asp:RadioButtonList>

                    </td>
                </tr>
                <tr>
                    <td>

                    </td>
                    <td>
                        <asp:Button ID="Button1" runat="server" Text="Search" OnClick="Button1_Click" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <p> Here's some options:</p>
                        <p> output: </br>
                        Table( Images, strings, links)</p>
                    </td>
                    <td>
                        <asp:Table border="0" ID="resultsTable" runat="server" Width="122px">
                            <asp:TableRow ID="op1" runat="server">
                                <asp:TableCell ID="info1" runat="server">
                                    <asp:HyperLink ID="HyperLink6" target="_blank" runat="server">
                                        <asp:Literal ID="Literal1" runat="server">

                                        </asp:Literal>

                                        <asp:Image ID="Image1" runat="server" width="200"/>

                                    </asp:HyperLink>

                                </asp:TableCell>
                            </asp:TableRow>
                            <asp:TableRow ID="op2" runat="server">
                                <asp:TableCell ID="info2" runat="server">
                                    <asp:HyperLink ID="HyperLink7" runat="server">
                                        <asp:Literal ID="Literal2" runat="server">

                                        </asp:Literal>

                                        <asp:Image ID="Image2" runat="server" width="200"/>

                                    </asp:HyperLink>
                                </asp:TableCell>
                            </asp:TableRow>
                            <asp:TableRow ID="op3" runat="server">
                                <asp:TableCell ID="info3" runat="server">
                                    <asp:HyperLink ID="HyperLink8" runat="server">
                                        <asp:Literal ID="Literal3" runat="server">

                                        </asp:Literal>

                                        <asp:Image ID="Image3" runat="server" width="200"/>

                                    </asp:HyperLink>
                                </asp:TableCell>
                            </asp:TableRow>
                            <asp:TableRow ID="op4" runat="server">
                                <asp:TableCell ID="info4" runat="server">
                                    <asp:HyperLink ID="HyperLink9" runat="server">
                                        <asp:Literal ID="Literal4" runat="server">

                                        </asp:Literal>

                                        <asp:Image ID="Image4" runat="server" width="200"/>

                                    </asp:HyperLink>
                                </asp:TableCell>
                            </asp:TableRow>
                            <asp:TableRow ID="op5" runat="server">
                                <asp:TableCell ID="inof5" runat="server">
                                    <asp:HyperLink ID="HyperLink10" runat="server">
                                        <asp:Literal ID="Literal5" runat="server">

                                        </asp:Literal>

                                        <asp:Image ID="Image5" runat="server" width="200"/>

                                    </asp:HyperLink>
                                </asp:TableCell>
                            </asp:TableRow>


                        </asp:Table>
                        
                    </td>
                    
                </tr>
            </table>
        </div>
    </form>
</body>
</html>
