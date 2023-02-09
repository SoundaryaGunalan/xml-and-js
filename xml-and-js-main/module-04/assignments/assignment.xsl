<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/"> 
    <html> 
      <body> 
        <h1>Catalog</h1>
        <ul>
            <xsl:for-each select="catalog/product"> 
                
                <h3>Product Id : 
                    <xsl:value-of select="@product_id"></xsl:value-of>
                </h3>

                <p><xsl:value-of select="@description"></xsl:value-of></p>

                <li>
                    <article>                        
                        <xsl:for-each select="catalog_item">
                            <table border="10">
                                <tr bgcolor="green"> 
                                    <th>Item number</th> 
                                    <th>Price</th> 
                                    <th>Gender</th> 
                                    <th>Small</th>
                                    <th>Medium</th>
                                    <th>Large</th>
                                    <th>Extra large</th>
                                </tr> 
                                <tr>                                
                                   <xsl:for-each select="size">
                                        <tr>
                                        <td><xsl:value-of select="../item_number"/></td>
                                        <td><xsl:value-of select="../price"/></td>
                                        <xsl:choose>
                                            <xsl:when test="../@gender='Men'">
                                                <td>M</td>
                                            </xsl:when>
                                            <xsl:otherwise>
                                                <td>F</td>
                                            </xsl:otherwise>
                                        </xsl:choose>

                                        <xsl:choose>
                                        <xsl:when test="@description='Small'">
                                            <td><xsl:value-of select="@description"/>
                                                <table border="1">
                                                    <th>Color</th>
                                                    <th>Image</th>
                                                    <xsl:for-each select="color_swatch"> 
                                                    <tr>
                                                        <td><xsl:value-of select="."/></td>
                                                        <td><xsl:value-of select="@image"/></td>
                                                    </tr>    
                                                </xsl:for-each> 
                                                </table>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </xsl:when>

                                        <xsl:when test="@description='Medium'">
                                            <td></td>
                                            <td><xsl:value-of select="@description"/>
                                                <table border="1">
                                                    <th>Color</th>
                                                    <th>Image</th>
                                                    <xsl:for-each select="color_swatch"> 
                                                    <tr>
                                                        <td><xsl:value-of select="."/></td>
                                                        <td><xsl:value-of select="@image"/></td>
                                                    </tr>    
                                                </xsl:for-each> 
                                                </table>
                                            </td>
                                            <td></td>
                                            <td></td>
                                        </xsl:when>

                                        <xsl:when test="@description='Large'">
                                            <td></td>
                                            <td></td>
                                            <td><xsl:value-of select="@description"/>
                                                <table border="1">
                                                    <th>Color</th>
                                                    <th>Image</th>
                                                    <xsl:for-each select="color_swatch"> 
                                                    <tr>
                                                        <td><xsl:value-of select="."/></td>
                                                        <td><xsl:value-of select="@image"/></td>
                                                    </tr>    
                                                </xsl:for-each> 
                                                </table>
                                            </td>
                                            <td></td>
                                        </xsl:when>

                                        <xsl:when test="@description='Extra Large'">  
                                            <td></td>
                                            <td></td>
                                            <td></td>                                  
                                            <td><xsl:value-of select="@description"/>
                                                <table border="1">
                                                    <th>Color</th>
                                                    <th>Image</th>
                                                    <xsl:for-each select="color_swatch"> 
                                                    <tr>
                                                        <td><xsl:value-of select="."/></td>
                                                        <td><xsl:value-of select="@image"/></td>
                                                    </tr>    
                                                </xsl:for-each> 
                                                </table>
                                            </td>
                                        </xsl:when>
                                        
                                        <xsl:otherwise>
                                            <td></td>
                                        </xsl:otherwise>
                                    </xsl:choose>
                                    </tr>
                                    </xsl:for-each>
                                </tr>                                 
                            </table>
                        </xsl:for-each>
                    </article>            
                </li>
            </xsl:for-each> 
        </ul>
      </body> 
    </html>
  </xsl:template>  
</xsl:stylesheet>