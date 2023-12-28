package Kandidaty_na_rabotu.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kandidaty_na_rabotu.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТЧГрафСобес
 */
@Entity(name = "IISKandidaty_na_rabotuТЧГрафСобес")
@Table(schema = "public", name = "ТЧГрафСобес")
public class TCHGrafSobes {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "PlanirSobes")
    @Convert("PlanirSobes")
    @Column(name = "ПланирСобес", length = 16, unique = true, nullable = false)
    private UUID _planirsobesid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "PlanirSobes", insertable = false, updatable = false)
    private PlanirSobes planirsobes;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "GrafSobes")
    @Convert("GrafSobes")
    @Column(name = "ГрафСобес", length = 16, unique = true, nullable = false)
    private UUID _grafsobesid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "GrafSobes", insertable = false, updatable = false)
    private GrafSobes grafsobes;


    public TCHGrafSobes() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}