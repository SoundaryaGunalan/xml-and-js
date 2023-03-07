<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/"> 
    <html> 
      <body> 
        <h2>Customers</h2>
        <ul>
          <xsl:for-each select="customers/customer"> 
            <li>
              <article style="margin-bottom: 50px;">
                <hgroup>
                  <h2 style="display: inline; margin-right: 10px;">
                    <xsl:value-of select="concat(name/@title, ' ', name)"/>
                  </h2>
                  <p  style="display: inline;">
                    <xsl:value-of select="@custID"/>
                  </p>
                </hgroup>
                <div>
                  <xsl:value-of select="address"/>
                </div>

                <h3>Orders</h3>
                <table border="1">
                  <tr> 
                    <th>Id</th> 
                    <th>Date</th> 
                    <th>Items</th> 
                  </tr> 
                  
                  <xsl:for-each select="orders/order"> 
                    <tr>
                      <td><xsl:value-of select="@orderID"/></td>
                      <td><xsl:value-of select="orderDate"/></td>
                      <td>
                        <xsl:for-each select="items/item"> 
                          <div> 
                            <span style="font-weight: bold;">
                              <xsl:value-of select="itemPrice"/>
                            </span>
                            <xsl:value-of select="concat(' x ', itemQty)"/>
                          </div> 
                        </xsl:for-each> 
                      </td>
                    </tr>
                  </xsl:for-each> 
                </table>
              </article>
            </li>
          </xsl:for-each> 
        </ul>
      </body> 
    </html>
  </xsl:template>  
</xsl:stylesheet>