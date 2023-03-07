<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/"> 
    <html> 
      <body> 
        <h2>Zoos</h2>
        <ul>
          <xsl:for-each select="zoos/zoo"> 
            <li>
              <article style="margin-bottom: 50px;">
                <hgroup>
                  <h2 style="display: inline; margin-right: 10px;">
                    <xsl:value-of select="@id"/>
                  </h2>
                  <p  style="display: inline;">
                    <xsl:value-of select="concat('Timings :', location/@openTime, ' - ', location/@closeTime)"/>
                  </p>
                </hgroup>
                <div>
                  <xsl:value-of select="concat('Location :', location/city, ', ', location/region, ', ', location/country)"/>
                </div>

                <h3>Animals</h3>
                <table border="1">
                  <tr> 
                    <th>Given Name</th> 
                    <th>Common Name</th> 
                    <th>Scientific Name</th>
                    <th>DOB</th>
                    <th>Sex</th> 
                  </tr> 
                  
                  <xsl:for-each select="animals/animal"> 
                    <tr>
                      <td><xsl:value-of select="commonName/@givenName"/></td>
                      <td><xsl:value-of select="commonName"/></td>
                      <td><xsl:value-of select="@scientificName"/></td>
                      <td><xsl:value-of select="dob"/></td>
                      <td><xsl:value-of select="sex"/></td>
                    </tr>
                  </xsl:for-each> 
                </table>

                <h3>Employees</h3>
                <table border="1">
                  <tr> 
                    <th>ID</th> 
                    <th>First Name</th> 
                    <th>Last Name</th>
                    <th>DOB</th>
                    <th>Position</th> 
                  </tr> 
                  
                  <xsl:for-each select="employees/employee"> 
                    <tr>
                      <td><xsl:value-of select="@id"/></td>
                      <td><xsl:value-of select="firstName"/></td>
                      <td><xsl:value-of select="lastName"/></td>
                      <td><xsl:value-of select="dobEmp"/></td>
                      <td><xsl:value-of select="position"/></td>
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