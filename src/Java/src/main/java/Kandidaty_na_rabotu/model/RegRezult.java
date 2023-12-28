package Kandidaty_na_rabotu.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kandidaty_na_rabotu.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: РегРезульт
 */
@Entity(name = "IISKandidaty_na_rabotuРегРезульт")
@Table(schema = "public", name = "РегРезульт")
public class RegRezult {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатРегРезСобес")
    private Date датрегрезсобес;

    @Column(name = "ПриглНаРаб")
    private Boolean приглнараб;

    @Column(name = "КандидОтклон")
    private Boolean кандидотклон;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "PlanirSobes")
    @Convert("PlanirSobes")
    @Column(name = "ПланирСобес", length = 16, unique = true, nullable = false)
    private UUID _planirsobesid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "PlanirSobes", insertable = false, updatable = false)
    private PlanirSobes planirsobes;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Organizaciya")
    @Convert("Organizaciya")
    @Column(name = "Организация", length = 16, unique = true, nullable = false)
    private UUID _organizaciyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Organizaciya", insertable = false, updatable = false)
    private Organizaciya organizaciya;

    @OneToMany(mappedBy = "regrezult", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCHRegRezult> tchregrezults;


    public RegRezult() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатРегРезСобес() {
      return датрегрезсобес;
    }

    public void setДатРегРезСобес(Date датрегрезсобес) {
      this.датрегрезсобес = датрегрезсобес;
    }

    public Boolean getПриглНаРаб() {
      return приглнараб;
    }

    public void setПриглНаРаб(Boolean приглнараб) {
      this.приглнараб = приглнараб;
    }

    public Boolean getКандидОтклон() {
      return кандидотклон;
    }

    public void setКандидОтклон(Boolean кандидотклон) {
      this.кандидотклон = кандидотклон;
    }


}